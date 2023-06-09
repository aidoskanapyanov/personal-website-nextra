import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // dynamic params
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";
    const image = searchParams.get("image") || "";
    const author = searchParams.get("author") || "Include a guest name";
    const readTime = searchParams.get("readTime") || "0";

    return new ImageResponse(
      (
        <div tw="h-full w-full flex items-start justify-start bg-slate-300 p-20">
          <div tw="flex h-full items-center w-full">
            <div tw="flex-1 flex flex-col mr-20">
              <h1 tw="text-7xl">{title}</h1>
              <p tw="text-slate-800 text-xl mt-0">
                {author} • {readTime}min
              </p>
            </div>
            {image ? (
              <div tw="flex relative">
                <svg
                  tw="absolute top-[-300px] left-[-100px] opacity-20"
                  id="visual"
                  viewBox="0 0 900 600"
                  width="900"
                  height="600"
                  version="1.1"
                >
                  <g transform="translate(444.3593826782917 273.8643784322123)">
                    <path
                      fill="#0f172a"
                      d="M186.1 -166.4C230.8 -141.4 249.4 -70.7 237.7 -11.7C226 47.4 184.1 94.8 139.4 139.9C94.8 185.1 47.4 228 -2.2 230.3C-51.9 232.5 -103.7 194 -149.2 148.9C-194.7 103.7 -233.9 51.9 -229.5 4.4C-225.1 -43.1 -177.3 -86.3 -131.8 -111.3C-86.3 -136.3 -43.1 -143.1 13.8 -156.9C70.7 -170.7 141.4 -191.4 186.1 -166.4"
                    ></path>
                  </g>
                </svg>
                <img
                  style={{ objectFit: "cover" }}
                  tw="mx-auto border-8 border-gray-800 w-[300px] h-[300px] rounded-full"
                  src={image}
                />
              </div>
            ) : null}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

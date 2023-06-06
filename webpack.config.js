import {fileURLToPath} from "url";
import path from "path";

// config파일 경로 읽기.
const filepath = fileURLToPath(import.meta.url);
// 루트 경로 읽기.(config가 root위치에 있기에 사용가능한 설정)
const rootpath = path.dirname(filepath);

const config = {
    entry: path.join(rootpath,"develop","index.ts"),
    mode: "development",
    module : {
        rules : [
            //TS로더
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            
        ],
    },
    resolve: {
        extensions: [".ts",".js"],
    },
    output: {
        filename: 'main.js',
        path: path.join(rootpath,"dist")
    }
};

export default config;
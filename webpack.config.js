const path = require("path");

const config = {
    entry: path.resolve(__dirname, "develop", "testReact.tsx"),
    mode: "development",
    module: {
        rules: [
            //TS로더
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },

        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    target: "node",
    externals: {
        express: "commonjs express",
    }
};

module.exports = config;
const path = require("path");

const clientConfig = {
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
            //바벨로더
            {
                test: /\.(tsx?|js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }

        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
};
const serverConfig = {
    entry: path.resolve(__dirname, "develop", "server", "appServer.ts"),
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
        filename: "server_bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    target: "node",
    externals: {
        express: "commonjs express",
    }
};

module.exports = [clientConfig, serverConfig];
export default function () {
    return {
        lastWayStyle: {
            background: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.2)), url('"
                + process.env.PUBLIC_URL
                + "/image/background.jpg') no-repeat center",
            backgroundSize: "cover"
        }
    };
};

import "./globals.css";
import Provider from "./SessionProvider";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={true && "yellowbg"}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}

export default function Footer(): JSX.Element {
    return (
        <footer className="py-8 border-t border-foreground-200">
            <div className="container text-center">
                <p className="text-md">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    )
}
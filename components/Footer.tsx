export function Footer() {
    return (
        <footer
            className="bg-muted/50 border-t-4 py-8"
            style={{ borderTopColor: '#B09E80' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="/logo.png"
                        alt="Kanaltytiq"
                        className="h-12 w-auto"
                    />
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Kanaltytiq. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

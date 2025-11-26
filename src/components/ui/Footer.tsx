export default function Footer() {
    return (
        <footer className="py-8 text-center text-xs font-mono text-muted-foreground border-t border-white/5">
            <p>DESIGNED & ENGINEERED BY RUDRA DESAI</p>
            <p className="mt-2 opacity-50">© {new Date().getFullYear()} • SYSTEM.VER.2.0</p>
        </footer>
    );
}

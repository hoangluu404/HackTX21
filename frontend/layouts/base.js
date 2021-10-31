export default function Base({ children }) {
    return (
        <>
            <header></header>
            <main className="flex-1">
                {children}
            </main>
            <footer>
                &copy; 2021
            </footer>
        </>
    );
}
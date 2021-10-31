export default function Base({ children }) {
    return (
        <>
            <header></header>
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <footer>
                &copy; 2021
            </footer>
        </>
    );
}
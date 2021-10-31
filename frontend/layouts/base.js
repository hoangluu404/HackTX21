export default function Base({ children }) {
    return (
        <div className="pageContainer">
            <header className="mx-8 uppercase font-display font-bold">
                Team Cloudy
            </header>
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <footer className="mx-8 my-12">
                &copy; 2021
            </footer>
        </div>
    );
}
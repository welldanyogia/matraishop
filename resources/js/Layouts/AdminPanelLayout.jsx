import CustomSideBar from '@/Components/CustomSideBar.jsx';

export default function AdminPanelLayout({ children }) {
    return (
        <>
            <CustomSideBar />
            <main
                className={
                    'min-h-[calc(100vh_-_56px)] bg-zinc-50 transition-[margin-left] duration-300 ease-in-out lg:ml-72 dark:bg-zinc-900'
                }
            >
                {children}
            </main>
            <footer
                className={
                    'transition-[margin-left] duration-300 ease-in-out lg:ml-72'
                }
            >
                {/*<Footer />*/}
            </footer>
        </>
    );
}

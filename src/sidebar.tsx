interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
function SideBar({isOpen,onClose}:SidebarProps){
    return (
        <div className={`fixed h-full w-64 bg-white shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="p-4">
                <img src="../images/icon-close.svg" alt="close icon" onClick={onClose} className="cursor-pointer" />
                <div>Collections</div>
                <div>Men</div>
                <div>Women</div>
                <div>About</div>
                <div>Contact us</div>
            </div>
        </div>
    );

}
export default SideBar;
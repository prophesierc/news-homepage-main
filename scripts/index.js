class Page
{
    constructor()
    {
        this.init()
    }
    
    init()
    {
        this.modal()
    }

    modal()
    {        
        const modal = document.querySelector('.navbar-modal');
        const openedIcon = document.querySelector('#navbar-opened-hamburger-icon');
        const closedIcon = document.querySelector('#navbar-closed-x-icon');

        openedIcon.onclick = () => 
        {
            modal.showModal();
        }
        closedIcon.onclick = () => 
        {
            modal.close();
        }
    }
    
}
const page = new Page();
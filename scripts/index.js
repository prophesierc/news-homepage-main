class Page
{
    constructor()
    {
        this.init()
    }

    modal()
    {        
        const modal = document.querySelector('.navbar-modal');
        const openedIcon = document.querySelector('#navbar-opened-hamburger-icon');
        const closedIcon = document.querySelector('#navbar-closed-x-icon');

        openedIcon.onclick = () => 
        {
            modal.show();
        }
        closedIcon.onclick = () => 
        {
            modal.close();
        }
    }
    init()
    {
        this.modal()
    }
}
const page = new Page();
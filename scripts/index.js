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
            modal.setAttribute("closing", ""); // creates empty attribute after initial click                      

            modal.onanimationend = () => 
            {
                modal.removeAttribute("closing"); // removes attribute immediately after clicking
                modal.close();
                modal.onanimationend = null; // remove the event handler after each animationend to allow the event to rerun
            };          
        }
          
    }
    init()
    {
        this.modal()
    }
}
const page = new Page();
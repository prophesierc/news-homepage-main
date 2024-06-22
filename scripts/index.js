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
            window.scrollTo(0, 0);
            document.body.classList.add('navbody'); // creates new class on body when navbar is open 
            modal.show();
        }

        closedIcon.onclick = () => 
        { 
            document.body.classList.remove('navbody');
            modal.setAttribute("closing", ""); // creates empty closing attribute after initial click - this is used to select the modal as it begins closing in css

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
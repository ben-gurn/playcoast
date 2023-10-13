import React from 'react';

class MobilePage extends React.Component {
  // This function will run after the component is rendered
  componentDidMount() {
    this.loadScript('https://affiliate.klook.com/widget/fetch-iframe-init.js');
  }
  
  loadScript(src) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;
    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadScript('https://affiliate.klook.com/widget/fetch-iframe-init.js');
    // Assuming the button is available after the script executes, 
    // you might need to delay this operation to ensure the DOM is fully loaded
    window.addEventListener('load', () => {
      const viewMoreButton = document.querySelector('.container .button .view_more[data-v-7b417bea]'); // replace '.view-more' with the actual selector of your button
      if (viewMoreButton) {
        viewMoreButton.style.display = 'none';
      }
    });
  }
  
  
  render() {
    return (
      <div className='bg-white'>
        {/* Existing Widget */}
        <ins
          className="klk-aff-widget"
          data-adid="761295"
          data-lang="en"
          data-currency="AUD"
          data-cardh="126" // Note the all lowercase prop name
          data-padding="92"
          data-lgh="470" // Note the all lowercase prop name
          data-edgevalue="655" // Note the all lowercase prop name
          data-prod="static_widget"
          data-amount="6"
        >
          <a href="//www.klook.com/">Klook.com</a>
        </ins>

        {/* New Widget */}
        <ins
          className="klk-aff-widget"
          data-adid="761323"
          data-lang="en"
          data-currency="AUD"
          data-cardh="126" // Make sure the prop names are all lowercase
          data-padding="92"
          data-lgh="470" // All lowercase prop name
          data-edgevalue="655" // All lowercase prop name
          data-prod="static_widget"
          data-amount="6"
        >
          <a href="//www.klook.com/">Klook.com</a>
        </ins>
      </div>
    );
  }


}


export default MobilePage;

window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
(function(){
  var choice=null;
  try{choice=localStorage.getItem('iws_analytics_consent');}catch(e){}
  gtag('consent','default',{
    analytics_storage:choice==='granted'?'granted':'denied',
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    wait_for_update:500
  });
  gtag('js',new Date());
  gtag('config','G-P3XSN970VV');

  function setConsent(value){
    try{localStorage.setItem('iws_analytics_consent',value);}catch(e){}
    gtag('consent','update',{analytics_storage:value,ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    var banner=document.getElementById('analytics-consent');
    if(banner)banner.remove();
  }

  document.addEventListener('DOMContentLoaded',function(){
    if(!choice){
      var banner=document.createElement('div');
      banner.id='analytics-consent';
      banner.className='consent-banner';
      banner.setAttribute('role','dialog');
      banner.setAttribute('aria-label','Analytics preference');
      banner.innerHTML='<div><strong>Analytics preference</strong><p>We use Google Analytics to understand which guides are useful. You can allow or decline analytics cookies.</p></div><div class="consent-actions"><button type="button" data-consent="denied">Decline</button><button type="button" class="consent-accept" data-consent="granted">Allow analytics</button></div>';
      banner.addEventListener('click',function(event){
        var button=event.target.closest('button[data-consent]');
        if(button)setConsent(button.getAttribute('data-consent'));
      });
      document.body.appendChild(banner);
    }

    document.addEventListener('click',function(event){
      var link=event.target.closest('a[href]');
      if(!link)return;
      var host;
      try{host=new URL(link.href).hostname;}catch(e){return;}
      if(host==='kit.com'||host.endsWith('.kit.com')||host==='mailchimp.com'||host.endsWith('.mailchimp.com')){
        gtag('event','partner_click',{
          partner_name:host.includes('mailchimp')?'mailchimp':'kit',
          link_url:link.href,
          link_text:link.textContent.trim()
        });
      }
    });
  });
})();
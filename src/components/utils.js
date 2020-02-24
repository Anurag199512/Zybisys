var request=require('sync-request');

export function initializeState(){
  
    let url='https://work.setu.co/assignments/stock-ui/anurag12345/portfolio';
      
    var res = request('GET', url);
    
    if (res.statusCode===200)
        return res.body;
    else
        {
            return({
            error:'Connection error , not able to fetch data'
        });
    }

}
 
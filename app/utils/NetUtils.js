import React,{Component} from 'react';

const DEBUG = true;

export default class NetUtils extends Component
{
    static get(url,parseJson= true)
    {
        return this.request(url,'get',undefined,parseJson);
    }

    static post(url,body,parseJson = true)
    {
        return this.request(url,'post',body,parseJson);
    }

    static request(url,method,body,parseJson)
    {
        console.log('######################');
        DEBUG && console.log("requesting.....# ["+method+"] url = "+url+" ,body= "+body+"");
        let isOk ;
        return new Promise((resolove,reject) => {
            fetch(url,{
                method: method,
                body: body
            }).then((response)=>{
                    isOk = !!response.ok;
                    if (parseJson)
                    {
                        return response.json();
                    }
                    return response.text();
            })
                .then((responseData) => {
                    DEBUG && console.log("responseData = "+responseData+"")
                    if (isOk)
                    {
                        resolove(responseData);
                    }
                    else
                    {
                        reject(responseData);
                    }
                })
                .catch((error)=>{
                    DEBUG && console.log("resonse## url== "+url+" ,error="+error+"");
                    reject(error);
                })
        });
    }
}
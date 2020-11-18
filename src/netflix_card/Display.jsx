
import data from './Card_Api';
import Card from './Card';
import Heading from './Heading';

function Display() {

  return (
    <>
    <Heading/>
    <div style={{display:'flex'}}> 
       
      {data.map( (val)=>   <Card 
                              key={val.id} 
                              pic={val.pic} 
                              sname={val.sname} 
                              title={val.title} 
                              link= {val.link}/>)}

    </div>
    </>
  );
}


export default Display;
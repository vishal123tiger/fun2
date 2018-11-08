import React from 'react';
import Fade from 'react-reveal/Fade'
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import "./profile.css";
import 'font-awesome/css/font-awesome.min.css';


class  Profile extends React.Component{
  constructor(){
    super();
    this.state={
      img:'',
      expanded: false
    }
     this.handleUploadImage = this.handleUploadImage.bind(this);
  }



    handleUploadImage() {


      const data = new FormData();
      data.append('file', this.uploadInput.files[0]);



      fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: data,
      }).then((response) => {
        response.json().then((data) => {
          this.setState({ img: `http://localhost:3001/${data.file}` });
          this.props.profile('profile');
        });
      });

    }
    // <img src={this.state.img}  style={{position:'absolute',top:200,left:300}}
    // className="shadow-3 grow pointer"  id="image3">
    // </img>

  render(){
    const {sign,nameChange,profile} = this.props

return(
  <div id="containers">
  <div  id="container1">


         <div id="images">


<img src={this.state.img} id="images1"/>
    </div>
    <div id="buttong">
    <Button variant="contained" color="primary" >
           Followers
         </Button>
         <Button variant="contained" color="primary">
                Likes
              </Button>
              <Button variant="contained" color="primary" >
                     Gallary
                   </Button>
                   </div>
       </div>
       <div id="contents">
       <p><i className="fa fa-envelope" style={{color:"yellow"}}></i>Messages</p>
       <p><i className="fa fa-phone" style={{color:"blue"}}></i>8696429337</p>
       <p><i className="fa fa-globe" style={{color:"green"}}></i>vis@gmail.com</p>
       <p><i className="fa fa-bell" style={{color:"red"}}></i>Request</p>
       <p><i className="fa fa-database" style={{color:"white"}}></i>Skills<i className="fa fa-heart" onClick={}></i></p>
       </div>


<div id="file_u"><span id="choose"><i className="fa fa-camera"></i></span><input
onChange={this.handleUploadImage} ref={(ref) => { this.uploadInput = ref; }}
type="file" id="fileu"></input></div>

</div>

);
}




}
export default Profile;

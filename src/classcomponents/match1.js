if (getLanguage() == "ma" && flag == 1) {
  // var user_id = localStorage.getItem("user_id");
  // const answer_array = this.props.location.pathname.split("/");
  // var research = answer_array["2"];
  getTopicEventMagazine();
}

if (getLanguage() == "en" && flag == 1) {
  this.setState({ flag: 0 });
  // var user_id = localStorage.getItem("user_id");
  // const answer_array = this.props.location.pathname.split("/");
  // var research = answer_array["2"];
  getTopicEventMagazine();
}

function getTopicEventMagazine() {
  fetch(myConstClass.BASE_URL + "magazine/getMagazineTitlesFrontEnd" + "/" + getLanguage())
    .then((response) => response.json())
    .then((response) => this.setState({ arrMagazine: response }))
    .catch((err) => console.log(err));

  topic_id = 0;
  var topic_id = $("#topic_id").val();
  if (topic_id > 0) {
  } else {
    var topic_id = $("#topic_id_m").val();
  }
  if (topic_id == "" || topic_id == undefined) {
    topic_id = 0;
  }
  var year = $("#year").val();
  if (year > 0) {
  } else {
    var year = $("#year_m").val();
  }
  if (year == "" || year == undefined) {
    year = 0;
  }
  var event_id = $("#event_id").val();
  if (event_id > 0) {
  } else {
    var event_id = $("#event_id_m").val();
  }
  if (event_id == "" || event_id == undefined) {
    event_id = 0;
  }
  //  alert(filetype);
  var limit = this.state.limit;

  fetch(myConstClass.BASE_URL + "photo/getImages" + "/" + getLanguage() + "/" + limit + "/" + topic_id + "/" + year + "/" + event_id)
    .then((response) => response.json())
    .then((response) => this.setState({ images: response }))
    .catch((err) => console.log(err));

  fetch(myConstClass.BASE_URL + "photo/getPhotoGalleryFrontEnd" + "/" + getLanguage() + "/" + limit + "/" + topic_id + "/" + year + "/" + event_id)
    .then((response) => response.json())
    .then((response) => {
      this.setState({ arr_gallery: response });
      var total = this.state.arr_gallery.length;
      if (total < 1) {
        $("#notAvailable").css("display", "inline");
        $("#showMoreBtn").removeClass("d-xl-block d-lg-block d-md-block");
        $("#showMoreBtnM").removeClass("d-block");
      } else {
        $("#notAvailable").css("display", "none");
      }
      if (total > 0) {
        var total_downloads = this.state.arr_gallery[0].total_downloads;
        var limit = this.state.limit;
        //  alert(total_downloads);
        if (total_downloads <= limit) {
          $("#showMoreBtn").removeClass("d-xl-block d-lg-block d-md-block");
          $("#showMoreBtnM").removeClass("d-block");
        } else {
          $("#showMoreBtn").css("display", "inline");
          $("#showMoreBtnM").css("display", "inline");
        }
      }
      //this.state.guestinfo.event_type_name =  this.state.posts[0].event_type;
    });

  fetch(myConstClass.BASE_URL + "getAllTopics" + "/" + getLanguage())
    .then((response) => response.json())
    .then((response) => this.setState({ topic: response }))
    .catch((err) => console.log(err));

  fetch(myConstClass.BASE_URL + "photo/getEventList" + "/" + getLanguage())
    .then((response) => response.json())
    .then((response) => this.setState({ arr_event: response }))
    .catch((err) => console.log(err));
}

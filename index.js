var VIDEO_ASPECT_RATIO = 16.0 / 9.0;



$("#more-video").on('loadedmetadata', function () {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });
import React from "react";
import useStyles from "./styles";
import useImages from "../../../../actions/cmsimage/useImages";

const Tree = () => {
  let dataImage;

  const classes = useStyles();

  const { data: images, isLoading } = useImages();

  if (isLoading) {
    console.log("");
  } else {
    const image = images.filter(image => image._id === "60cf57e0f345c06e946bd6a4");

    dataImage = image[0].image;
  }

  return (
    <div
      style={
        isLoading
          ? {
              backgroundColor: "rgb(214, 214, 216)",
            }
          : {
              backgroundImage: `url("${dataImage}")`,
            }
      }
      className={classes.treeLayout}
    ></div>
  );
};

export default Tree;

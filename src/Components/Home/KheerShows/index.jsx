import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Image, Grid, Text } from "@nextui-org/react";
import khieerImage from '../../../assets/images/login.png'
import { FormattedMessage } from "react-intl";

const KheerShow = props => {
  return (
    <Grid.Container gap={2}>
      <Carousel autoPlay
        interval={2350}
        showArrows={true}>
        <Carousel.Item>
          <Image
            className="d-block w-30"
            src={khieerImage}
            alt="Default Image"
          />
          <Text className="text-center green-khieer" h3><FormattedMessage id="kheershow.title" /></Text>
          <Text className="text-center" h6><FormattedMessage id="kheershow.body" /></Text>
          <Text className="text-center blue-khieer" h4><FormattedMessage id="kheershow.slogan" /></Text>

        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-30"
            src={khieerImage}
            alt="Default Image"
          />
          <Text className="text-center green-khieer" h3><FormattedMessage id="kheershow.title" /></Text>
          <Text className="text-center" h6><FormattedMessage id="kheershow.body" /></Text>
          <Text className="text-center blue-khieer" h4><FormattedMessage id="kheershow.slogan" /></Text>

        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-30"
            src={khieerImage}
            alt="Default Image"
          />
          <Text className="text-center  green-khieer" h3><FormattedMessage id="kheershow.title" /></Text>
          <Text className="text-center" h6><FormattedMessage id="kheershow.body" /></Text>
          <Text className="text-center  blue-khieer" h4><FormattedMessage id="kheershow.slogan" /></Text>

        </Carousel.Item>
      </Carousel>
    </Grid.Container>
  )
}

export default KheerShow;
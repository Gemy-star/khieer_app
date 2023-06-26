import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { Image, Grid, Text } from "@nextui-org/react";
import khieerImage from '../../../assets/images/login.png'
import {FormattedMessage} from "react-intl";

const KheerShow = props => {
    return (
        <Grid.Container gap={2}>
        <Carousel  autoPlay
            interval={2350}
            showArrows={true}>
                <div>
                <Image
          src={khieerImage}
          alt="Default Image"
          width={350}
          height={350}
        />
              <Text className="legend" h3><FormattedMessage id="kheershow.title"/></Text>
              <Text className="legend" h6><FormattedMessage id="kheershow.body"/></Text>
              <Text className="legend" h4><FormattedMessage id="kheershow.slogan"/></Text>

                </div>
                <div>
                <Image
          src={khieerImage}
          alt="Default Image"
          width={350}
          height={350}
        />
              <Text className="legend" h3><FormattedMessage id="kheershow.title"/></Text>
              <Text className="legend" h6><FormattedMessage id="kheershow.body"/></Text>
              <Text className="legend" h4><FormattedMessage id="kheershow.slogan"/></Text>

                </div>
                <div>
                <Image
          src={khieerImage}
          alt="Default Image"
          width={350}
          height={350}
        />
              <Text className="legend" h3><FormattedMessage id="kheershow.title"/></Text>
              <Text className="legend" h6><FormattedMessage id="kheershow.body"/></Text>
              <Text className="legend" h4><FormattedMessage id="kheershow.slogan"/></Text>

                </div>
            </Carousel>
            </Grid.Container>
    )
}

export default KheerShow;
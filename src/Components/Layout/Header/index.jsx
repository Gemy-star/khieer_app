import { Navbar} from "@nextui-org/react";
import { KhieerLogo } from "./KheerLogo.js";
import { Dropdown } from "@nextui-org/react";
import {FormattedMessage, useIntl} from "react-intl";
import React ,{useContext , useState} from 'react';
import {LocalizationContext} from "../../../context/LocalizationContext";

export default function Header() {
    const [locale , setLocale] = useContext(LocalizationContext);

  return (
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <KhieerLogo />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link isActive href="#"><FormattedMessage id="navbar.home"/></Navbar.Link>
          <Navbar.Link href="#"><FormattedMessage id="navbar.about"/></Navbar.Link>
          <Navbar.Link href="#"><FormattedMessage id="navbar.contact"/></Navbar.Link>
          <Navbar.Link href="#"><FormattedMessage id="navbar.programs"/></Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
          <Dropdown>
      <Dropdown.Button flat><FormattedMessage id="language.title"/></Dropdown.Button>
      <Dropdown.Menu 
      aria-label="Static Actions"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={[locale]}
      onSelectionChange={() =>  locale ===  'en' ? setLocale('ar') : setLocale('en')}
      >
        <Dropdown.Item key="en"><FormattedMessage id="language.english"/></Dropdown.Item>
        <Dropdown.Item key="ar"><FormattedMessage id="language.arabic"/></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  )
}
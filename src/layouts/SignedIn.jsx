import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) { //props obje olarak geliyor, ancak böyle destructure edebiliriz yani ({signOut,birsey,birsey})
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="left"
          src="https://specificobject.com/objects/images/27737.jpg"
        />
        <Dropdown pointing="top right" text="Bilal">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

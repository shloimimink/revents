import React from "react";
import {Dropdown, Image, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function SignInMenu({signOut}) {
    return (
        <Menu.Item position='right'>
            <Image avatar spaced='right' src='/assets/user.png'/>
            <Dropdown pointing='top left' text='bob'>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create an Event' icon='plus'/>
                    <Dropdown.Item text='My profile' icon='user'/>
                    <Dropdown.Item onClick={signOut} text='Sign out' icon='power'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}
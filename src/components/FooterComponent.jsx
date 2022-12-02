import { Footer } from 'flowbite-react';
import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div>
      <Footer container={true}>
        <div className="container mx-auto">
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="w-full grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <Footer.Title title="SERVICES" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">Flowbite</Footer.Link>
                    <Footer.Link href="#">Tailwind CSS</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="ORAL HEALTH" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">Github</Footer.Link>
                    <Footer.Link href="#">Discord</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="OUR ADDRESS" />
                  <Footer.LinkGroup col={true}>
                    <Link to="#">Emergency Checkup</Link>
                    <Link to="#">Emergency Checkup</Link>
                    <Link to="#">Emergency Checkup</Link>
                    <Link to="#">Emergency Checkup</Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="Flowbite™" year={2022} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComponent;

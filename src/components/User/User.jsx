import React from "react";
import Avatar from "../../static/images/avatar.jpg";
import PhoneIcon from "../../static/images/phone.png";
import GmailIcon from "../../static/images/email.png";

const User = () => {
    return (
        <section className="section-container user">
            <figure className="user__image-container">
                <img src={Avatar} alt="avatar" className="user__image" />
            </figure>

            <div className="user-info-wrapper">
                <div className="user-info-main">
                    <div className="user__basic-info">
                        <h3 className="user__name">Rikikudo</h3>
                        <h4 className="user__jobTitle">Front-end Developer</h4>
                    </div>

                    <div className="user__contact-info">
                        <h5 className="user__email">
                            <img src={PhoneIcon} alt="phone-icon" />
                            trunghieu99tt@gmail.com
                        </h5>
                        <h5 className="user__phone">
                            <img src={GmailIcon} alt="gmail-icon" />
                            0868789737
                        </h5>
                    </div>
                </div>

                <p className="user__quotes">
                    When you've been fighting for it all your life You've been
                    struggling to make things right That’s how a superhero
                    learns to fly
                </p>
            </div>
        </section>
    );
};

export default User;

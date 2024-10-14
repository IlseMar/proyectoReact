import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="logos">
          <div
            style="text-decoration: none"
            className="link-logos"
            href="https://www.instagram.com/chromati.ca/"
            target="_blank"
          >
            <img src="./assets/img/logos/Instagram.png" alt="Instagram" />
          </div>
          <div
            style="text-decoration: none"
            className="link-logos"
            href="https://www.facebook.com/profile.php?id=100076318662834&mibextid=ZbWKwL"
            target="_blank"
          >
            <img src="./assets/img/logos/Facebook.png" alt="facebook" />
          </div>
          <div
            className="link-logos"
            href="https://www.tiktok.com/@chromati.ca?pid=video_embed&referer_video_id=7347371493220764934&videoId=7347371493220764934&type=video&referer_url=127.0.0.1:5500/index.html&refer=embed&embed_source=121374463,121433650,121404359,121331973,120811592,120810756,72248228;null;embed_name"
            target="_blank"
          >
            <img src="./assets/img/logos/TikTok.png" alt="tiktok" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

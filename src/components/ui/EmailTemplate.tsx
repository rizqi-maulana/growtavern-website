interface Props {
  token: string;
  name: string;
}

const EmailTemplate = ({ token, name }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#60A5FA", // bg-blue-400
        color: "#000", // text-black
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: "640px", margin: "0 auto" }}>
        <div style={{ backgroundColor: "#60A5FA" }}>
          <img
            alt="GrowTavern logo with characters and tree"
            style={{ margin: "0 auto", width: "100%", height: "auto" }}
            src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731855467/Proyek_Baru_68_D032486_susktp.webp"
          />
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "32px",
            backgroundColor: "#FFFFFF", // bg-white
          }}
        >
          <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>
            PASSWORD CHANGE REQUEST
          </h1>
          <p style={{ fontSize: "18px", marginBottom: "16px" }}>Hello GrowTavern!</p>
          <p style={{ fontSize: "18px", marginBottom: "16px" }}>
            A request was made to
            <strong> change your password </strong>
            for your account
            <strong> {name} </strong>.
          </p>
          <p style={{ fontSize: "18px", margin: "16px 0" }}>
            If this was you, please verify the password change:
          </p>
          <a
            href={`https://growtavern.site/recovery?token=${token}`}
            style={{
              backgroundColor: "#22C55E", // bg-green-500
              color: "#FFF", // text-white
              fontWeight: "bold",
              padding: "8px 16px",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            CHANGE PASSWORD
          </a>
          <p style={{ fontSize: "18px", margin: "16px 0" }}>
            Alternatively, you can change your password by copying and pasting the
            below URL into your browser:
          </p>
          <div
            style={{
              backgroundColor: "#E5E7EB", // bg-gray-200
              padding: "16px",
              borderRadius: "4px",
              marginBottom: "16px",
            }}
          >
            <p style={{ color: "#EF4444", wordBreak: "break-word" }}>
              https://growtavern.site/recovery?token=${token}
            </p>
          </div>
          <p style={{ fontSize: "18px", marginBottom: "16px" }}>
            In case you did not try to change your password, we strongly recommend
            changing your log-in credentials as soon as possible as they might
            have been compromised.
          </p>
          <p style={{ fontSize: "18px", marginBottom: "16px" }}>~ The GrowTavern Team</p>
        </div>
        <div style={{ backgroundColor: "#22C55E", height: "8px" }}></div>
        <div
          style={{
            backgroundColor: "#60A5FA",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <a
              href="https://discord.gg/HnDsWK67sV"
              style={{ fontSize: "24px", color: "#FFF", textDecoration: "none" }}
            >
              Discord
            </a>
            <a
              href="https://growtavern.site"
              style={{ fontSize: "24px", color: "#FFF", textDecoration: "none" }}
            >
              Google
            </a>
          </div>
          <p style={{ color: "#FFF", fontSize: "14px", marginBottom: "16px" }}>
            © 2024 GrowTavern.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginBottom: "16px",
            }}
          >
            <img
              alt="GrowTavern logo"
              style={{ width: "96px" }}
              src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726205113/growtavern_i0uro3.webp"
            />
            <img
              alt="Ubisoft logo"
              style={{ width: "56px" }}
              src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731856338/tavern_citems_3_ydge0l.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;

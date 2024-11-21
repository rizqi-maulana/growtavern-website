interface Props {
  token: string;
  name: string
}
const EmailTemplate = ({ token, name }: Props) => {
  return (
    <div className="bg-blue-400 text-black font-sans">
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-blue-400">
          <img
            alt="GrowTavern logo with characters and tree"
            className="mx-auto w-full h-max"
            src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731855467/Proyek_Baru_68_D032486_susktp.webp"
          />
        </div>
        <div className="text-center p-8 bg-white">
          <h1 className="text-4xl font-bold mb-4">PASSWORD CHANGE REQUEST</h1>
          <p className="text-lg mb-4">Hello GrowTavern!</p>
          <p className="text-lg mb-4">
            A request was made to
            <strong> change your password </strong>
            for your account
            <strong> {name} </strong>
            .
          </p>
          <p className="text-lg my-4">
            If this was you, please verify the password change:
          </p>
          <a
            href={`https://growtavern.site/recovery?token=${token}`}
            className="bg-green-500 text-white font-bold py-2 px-4 relative rounded"
          >
            CHANGE PASSWORD
          </a>
          <p className="text-lg my-4">
            Alternatively, you can change your password by copying and pasting the
            below URL into your browser:
          </p>
          <div className="bg-gray-200 p-4 rounded mb-4">
            <p className="text-red-500 break-words">
              https://growtavern.site/recovery?token=${token}
            </p>
          </div>
          <p className="text-lg mb-4">
            In case you did not try to change your password, we strongly recommend
            changing your log-in credentials as soon as possible as they might
            have been compromised.
          </p>
          <p className="text-lg mb-4">~ The GrowTavern Team</p>
        </div>
        <div className="bg-green-500 h-2"></div>
        <div className="bg-blue-400 p-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://discord.gg/growtavern"
              className="fab fa-discord text-white text-2xl"
            >
            </a>
            <a
              href="https://growtavern.site"
              className="fab fa-google text-white text-2xl"
            >
            </a>
          </div>
          <p className="text-white text-sm mb-4">© 2024 GrowTavern.</p>
          <div className="flex items-center justify-evenly mb-4">
            <img
              alt="GrowTavern logo"
              className="w-24"
              src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726205113/growtavern_i0uro3.webp"
              width="100"
            />
            <img
              alt="Ubisoft logo"
              className="w-14"
              src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731856338/tavern_citems_3_ydge0l.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailTemplate;
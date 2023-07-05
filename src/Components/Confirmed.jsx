export default function Confirmed({ data }) {
  const { fullName, fee, image } = data;

  return (
    <div className="border border-gray-300 bg-white rounded-md mx-auto mt-11 w-1/2">
      <div className="flex flex-col md:flex-row items-center border-b p-4">
        <img
          src={image}
          alt="Doctor"
          className="w-16 h-16 mx-auto md:mx-0 md:mr-4 rounded-full"
        />
        <div className="md:flex md:flex-col md:items-start md:ml-4">
          <h2 className="text-xl text-center md:text-left">{fullName}</h2>
          <p className="text-sm text-center md:text-left">
            Neurologist <br />
            M.B.B.S, F.C.P.S (Neurology) <br />
            <strong>FEE: {fee}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

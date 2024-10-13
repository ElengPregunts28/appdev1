import './App.css';

const user = {
  name: 'Cutie Pie',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 400,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style = {{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
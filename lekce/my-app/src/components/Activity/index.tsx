

interface ActivityProps{
    nameOfActivity: string;
  type: string;
  participants: number;
  price: number;
}

export const Activity: React.FC<ActivityProps> = ({
    nameOfActivity,
    type,
    participants,
    price,
}) => {
    <div>
    <h3>Name of the Activity:</h3>
    <p>Type:</p>
    <p>Participants:</p>
    <p>Price:</p>
  </div>
}
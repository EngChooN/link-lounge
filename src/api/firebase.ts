import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../firebase.config";

export const getChannels = async () => {
  const channelsCol = collection(db, 'channels');
  const channelSnapshot = await getDocs(channelsCol);
  const channelList = channelSnapshot.docs.map(doc => doc.data());
  return channelList
}

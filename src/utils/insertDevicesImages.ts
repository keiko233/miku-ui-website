import odin from '../assets/devices/odin.png';
import mona from '../assets/devices/mona.png';
import Violet from '../assets/devices/Violet.png';
import Wayne from '../assets/devices/Wayne.png';

export const insertDevicesImages = (devices: Array<any>) => {
  devices.forEach(function (item: any) {
    item.changelog = JSON.parse(item.changelog);
    item.note = JSON.parse(item.note);
    if (item.device == "odin") item.image_url = odin;
    else if (item.device == "mona") item.image_url = mona;
    else if (item.device == "Violet") item.image_url = Violet;
    else if (item.device == "Wayne") item.image_url = Wayne;
  });

  return devices;
}

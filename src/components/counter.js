export const calculate = async () => {
  var countDownDate = await new Date("August 12, 2022 11:00:00").getTime();
  var now = await new Date().getTime();
  var timeleft = (await countDownDate) - now;
  const days = await Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = await Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = await Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = await Math.floor((timeleft % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

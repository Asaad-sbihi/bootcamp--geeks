import chalk from 'chalk';

function showMessage() {
  console.log(chalk.blue.bold.bgYellow(' Welcome!'));
}
module.exports = showMessage;
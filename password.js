/*Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).*/
function getPasswordFromCommandLine() {
    return process.argv[2];
  };
  function obfuscate(password) {
      var result = '';
      for (var i = 0; i < password.length; i++) {
        switch(password[i]) {
          case 'a':
            result += '4';
            break;
          case 'e':
            result += '3';
            break;
          case 'o':
            result += '0';
            break;
          case 'l':
            result += '1';
            break;
          default:
            result += password[i];
        }
      }
      console.log(result);
    }

  const password = getPasswordFromCommandLine();
  obfuscate(password);
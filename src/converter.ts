module.exports.converter = function (value: number, from: string, to: string): number {
    let result: number | undefined = undefined;

    if (['C', 'K'].includes(from) && ['C', 'K'].includes(to)) {
      if (from === 'C' && to === 'K') {
        result = value + 273.15;
      } else if (from === 'K' && to === 'C') {
        result = value - 273.15;
      }
    } else if (['C', 'F'].includes(from) && ['C', 'F'].includes(to)) {
      if (from === 'C' && to === 'F') {
        result = (value * 9 / 5) + 32;
      } else if (from === 'F' && to === 'C') {
        result = (value - 32) * 5 / 9;
      }
    }

    else if (['gr', 'pound'].includes(from) && ['gr', 'pound'].includes(to)) {
      if (from === 'gr' && to === 'pound') {
        result = value / 453.592;
      } else if (from === 'pound' && to === 'gr') {
        result = value * 453.592;
      }
    }

    else if (['m', 'mi'].includes(from) && ['m', 'mi'].includes(to)) {
      if (from === 'm' && to === 'mi') {
        result = value / 1609.344;
      } else if (from === 'mi' && to === 'm') {
        result = value * 1609.344;
      }
    }

    if (result === undefined) {
      throw new Error('Invalid conversion');
    }

    return parseFloat(result.toFixed(2));
  };
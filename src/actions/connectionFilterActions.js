const activated = {
  all: true,
  connections: {
    zero: true,
    one: true,
    two: true,
    free: true,
  },
};

const deactivated = {
  all: false,
  connections: {
    zero: false,
    one: false,
    two: false,
    free: false,
  },
};

export const handleConnectionAll = () => ({
  type: 'all',
  allActivated: activated,
  notAllDeactivated: deactivated,
});

export const handleConnectionZero = () => ({
  type: 'zero',
  notAllActivated: { ...activated.connections, zero: false },
  notAllDeactivated: { all: false, connections: { ...activated.connections, zero: false } },
  allActivated: activated,
});

export const handleConnectionOne = () => ({
  type: 'one',
  notAllActivated: { ...activated.connections, one: false },
  notAllDeactivated: { all: false, connections: { ...activated.connections, one: false } },
  allActivated: activated,
});

export const handleConnectionTwo = () => ({
  type: 'two',
  notAllActivated: { ...activated.connections, two: false },
  notAllDeactivated: { all: false, connections: { ...activated.connections, two: false } },
  allActivated: activated,
});

export const handleConnectionFree = () => ({
  type: 'free',
  notAllActivated: { ...activated.connections, free: false },
  notAllDeactivated: { all: false, connections: { ...activated.connections, free: false } },
  allActivated: activated,
});

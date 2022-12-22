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

export const handleConnectionAll = (e) => ({
  type: 'all',
  allActivated: activated,
  notAllDeactivated: deactivated,
  filter: e.target.checked,
});

export const handleConnectionZero = (e) => ({
  type: 'zero',
  notAllActivated: { ...activated.connections, zero: false },
  notAllDeactivated: { all: false, connections: { ...activated.connections, zero: false } },
  allActivated: activated,
  filter: e.target.id,
});

export const handleConnectionOne = (e) => ({
  type: 'one',
  notAllActivated: { ...activated.connections, one: false },
  notAllDeactivated: { all: false, connections: { ...activated.connections, one: false } },
  allActivated: activated,
  filter: e.target.id,
});

export const handleConnectionTwo = (e) => ({
  type: 'two',
  notAllActivated: { ...activated.connections, two: false },
  notAllDeactivated: { all: false, connections: { ...activated.connections, two: false } },
  allActivated: activated,
  filter: e.target.id,
});

export const handleConnectionFree = (e) => ({
  type: 'free',
  notAllActivated: { ...activated.connections, free: false },
  notAllDeactivated: { all: false, connections: { ...activated.connections, free: false } },
  allActivated: activated,
  filter: e.target.id,
});

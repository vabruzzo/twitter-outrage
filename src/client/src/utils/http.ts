const get = async (entity: string): Promise<any[]> => {
  const response = await fetch(`/api/${entity}`);
  return await response.json();
};

const create = async (entity: string, payload: {}): Promise<any> => {
  try {
    const response = await fetch(`/api/${entity}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return await response.json();
  } catch (e) {
    throw Error(e);
  }
};

export { get, create };

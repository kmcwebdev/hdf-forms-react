import { Floor } from 'src/utilities/interface/floor.interface';
import { Site } from 'src/utilities/interface/site.interface';
import { makeRequest } from '../http.service';

export class SiteAPI {
  static async sites() {
    const sites = await makeRequest<Site[]>({
      url: '/api/sites',
    });

    return sites.data;
  }

  static async floors(siteId: number) {
    const sites = await makeRequest<Floor[]>({
      url: '/api/sites/floors',
      params: {
        siteId,
      },
    });

    return sites.data;
  }
}

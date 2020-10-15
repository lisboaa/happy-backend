import Orphanage from '../model/Orphanages';
import imagesView from './images_view';

export default {
    render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.longitude,
            longitude: orphanage.latitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)
        };
    },

    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(Orphanage => this.render(Orphanage));
    }
}
import './PageCard.css';

export default {
    name: 'page-card',
    
    template: `
      <div class="page-card-container">
      <i class="fas fa-camera"></i> <!-- this icon's 1) style prefix == fas and 2) icon name == camera -->
      
        <slot></slot>
      </div>
    `
  };
  
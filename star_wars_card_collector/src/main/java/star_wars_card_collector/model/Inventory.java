package star_wars_card_collector.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Represents an inventory entity that holds a list of names.
 */
@Entity
@Table(name = "inventory")
@Getter
@Setter
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @CollectionTable(name = "inventory_names", joinColumns = @JoinColumn(name = "inventory_id"))
    @Column(name = "name", columnDefinition = "TEXT")
    private List<String> names;
}
